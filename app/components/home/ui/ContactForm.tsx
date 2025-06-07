"use client"

import { useState } from "react"
import { Button } from "@/common/Button"

export const ContactForm = () => {
    const [isChecked, setIsChecked] = useState(true);

    const handleClick = (e: React.FormEvent) => {
        e.preventDefault();
        alert("You sent a message")
    }
    
    return (
        <form 
            action="" 
            className="w-full flex flex-col gap-y-10 px-4 py-5 lg:w-3/5"
        >
            <div className="flex items-center space-x-8">
                <div className="flex items-center space-x-2">
                    <input 
                        type="radio" 
                        name="greeting" 
                        id="greeting-hi"
                        className="custom-radio"
                        checked={isChecked}
                        onChange={() => setIsChecked(!isChecked)}
                    />
                    <label 
                        htmlFor="greeting-hi" 
                        className="cursor-pointer text-base text-black"
                    >
                        Say Hi
                    </label>
                </div>
                <div className="flex items-center space-x-2">
                    <input 
                        type="radio" 
                        name="greeting" 
                        id="greeting-quote"
                        className="custom-radio" 
                        checked={!isChecked}
                        onChange={() => setIsChecked(!isChecked)}
                    />
                    <label 
                        htmlFor="greeting-quote" 
                        className="cursor-pointer text-base text-black"
                    >
                        Get a Quote
                    </label>
                </div>
            </div>
            <div className="flex flex-col items-start justify-between gap-y-[25px]">
                <div className="w-full flex items-start flex-col space-y-2">
                    <label 
                        htmlFor="fullname" 
                        className="text-base text-black"
                    >
                        Name
                    </label>
                    <input 
                        type="text" 
                        name="fullname" 
                        id="fullname"
                        placeholder="Name"
                        className="border px-[30px] py-[18px] rounded-[14px] bg-white w-full" 
                    />
                </div>
                <div className="w-full flex items-start flex-col space-y-2">
                    <label 
                        htmlFor="email" 
                        className="text-base text-black"
                    >
                        Email
                    </label>
                    <input 
                        type="email" 
                        name="email" 
                        id="email"
                        placeholder="Email"
                        className="border px-[30px] py-[18px] rounded-[14px] bg-white w-full" 
                    />
                </div>
                <div className="w-full flex items-start flex-col space-y-2">
                    <label 
                        htmlFor="message" 
                        className="text-base text-black"
                    >
                        Message
                    </label>
                    <textarea 
                        name="message" 
                        id="message"
                        placeholder="Message"
                        rows={6}
                        className="border px-[30px] py-[18px] rounded-[14px] bg-white w-full" 
                    />
                </div>
            </div>
            <Button 
                variant="contained" 
                label="Send Message"
                onClick={handleClick}
            />
        </form>
    )
}