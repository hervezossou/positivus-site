"use client"

import { motion } from "motion/react"

export const Footer = () => {
    return (
        <motion.footer
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1}}
        >

        </motion.footer>
    )
}