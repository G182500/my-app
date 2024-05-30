"use client"
import { createContext, useEffect, useState } from "react";
import { useRouter } from 'next/navigation'
import { setCookie, parseCookies } from "nookies";
import signInRequest from "@/services/auth";

interface AuthContext {
	isAuthenticated: boolean;
	user: any;
	signIn: (data: any) => Promise<void>
}

export const AuthContext = createContext({} as AuthContext)

const AuthProvider = ({ children }) => {
	const router = useRouter();
	const [user, setUser] = useState(null);

	const isAuthenticated = Boolean(user);

	useEffect(() => {
		const { 'my-app-token': token } = parseCookies();
		if (token) {
			//getUserById
			//token deve ter o id do usuario, para saber quem o criou
			//setUser(user)
		}
	}, []);

	const signIn = async ({ username, password }) => {
		const { message, data } = await signInRequest({ username, password });

		setCookie(undefined, "my-app-token", data.token, { maxAge: 68 * 68 * 1 }); //maxAge -> 1h
		setUser(user);

		router.push("/");
	}

	return (
		<AuthContext.Provider value={{ user, isAuthenticated, signIn }}>
			{children}
		</AuthContext.Provider>
	)
}
export default AuthProvider