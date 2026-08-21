'use client'

import { useEffect, useState } from 'react'
import { createClient } from '@/lib/supabase/client'
import type { User } from '@supabase/supabase-js'
import type { Firm, FirmMember, Profile } from '@/types/database'

interface AuthState {
  user: User | null
  profile: Profile | null
  membership: FirmMember | null
  firm: Firm | null
  loading: boolean
}

export function useAuth() {
  const [state, setState] = useState<AuthState>({
    user: null,
    profile: null,
    membership: null,
    firm: null,
    loading: true,
  })

  const supabase = createClient()

  useEffect(() => {
    async function loadUser() {
      try {
        const { data: { user } } = await supabase.auth.getUser()

        if (!user) {
          setState({ user: null, profile: null, membership: null, firm: null, loading: false })
          return
        }

        const { data: profile } = await supabase
          .from('profiles')
          .select('*')
          .eq('id', user.id)
          .maybeSingle()

        const { data: membership } = await supabase
          .from('firm_members')
          .select('*')
          .eq('user_id', user.id)
          .eq('is_active', true)
          .maybeSingle()

        let firm: Firm | null = null
        if (membership) {
          const { data } = await supabase
            .from('firms')
            .select('*')
            .eq('id', membership.firm_id)
            .maybeSingle()
          firm = data as Firm | null
        }

        setState({
          user,
          profile: profile as Profile | null,
          membership: membership as FirmMember | null,
          firm,
          loading: false,
        })
      } catch {
        setState({ user: null, profile: null, membership: null, firm: null, loading: false })
      }
    }

    loadUser()

    const { data: { subscription } } = supabase.auth.onAuthStateChange(() => {
      loadUser()
    })

    return () => subscription.unsubscribe()
  }, []) // eslint-disable-line react-hooks/exhaustive-deps

  return state
}
