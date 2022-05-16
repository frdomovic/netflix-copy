import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
  User,
} from 'firebase/auth'

import Router, { useRouter } from 'next/router'
import { createContext, useContext, useEffect, useMemo, useState } from 'react'
import { auth } from '../firebase'




export default function useAuth() {
    const [loading, setLoading] = useState(false)
    const [user, setUser] = useState<User | null>(null)
    const rounter = useRouter()

    const signUp = async (email: string,password: string) {
        setLoading(true)

        await createUserWithEmailAndPassword(auth, email, password).then(
            (userCredential) => {
                setUser(userCredential.user)
                rounter.push("/")
                setLoading(false)
            }
        ).catch((err) => {
            alert(err.message)
        })
    }
    const signIn = async (email: string,password: string) {
        setLoading(true)

        await signInWithEmailAndPassword(auth, email, password).then(
            (userCredential) => {
                setUser(userCredential.user)
                rounter.push("/")
                setLoading(false)
            }
        ).catch((err) => {
            alert(err.message)
        })
    }

    const logout = async () => {
        setLoading(true)
        signOut(auth).then(()=> {
            setUser(null)
        }).catch((error)  => alert(error.message))
        .finally(()=> setLoading(false))
    }
}
