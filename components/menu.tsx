"use client"
import Image from "next/image";
import logo from "@/assets/imgs/lindemann-logo.png";
import { MenuIcon, ShoppingCart, User } from "lucide-react";

const getSalutation = () => {
	const hour = new Date().getHours();
	if (hour >= 5 && hour < 12) return "Bom dia";
	else if (hour >= 12 && hour < 18) return "Boa tarde";
	return "Boa noite";
}

const salutation = getSalutation();

const Menu = () => {
	const userId = localStorage.getItem("userId");
	//get userName by userId
	const firstName = "Gabriel Bueno"; //Pegar primeiro e ultimo nome

	return (
		<div className="flex bg-[#2e2e2e] justify-around py-3">
			<div className="flex gap-8 items-center">
				<Image src={logo.src} height={32} width={120} alt="logo" />
				<input className="text-black text-sm w-64" placeholder="Buscar item" type="text" />
			</div>
			<div className="flex gap-5 items-center">
				<MenuIcon />
				<ShoppingCart />
				<div className="flex space-x-1">
					<User />
					<p>{firstName}</p>
				</div>
			</div>
		</div>
	)
}

export default Menu;