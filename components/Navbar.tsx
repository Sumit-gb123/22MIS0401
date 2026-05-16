"use client"

import Link from "next/link"
import { AppBar, Toolbar, Button } from "@mui/material"

export default function Navbar() {
  return (
    <AppBar position="static">
      <Toolbar>
        <Link href="/">
          <Button sx={{ color: "white" }}>All Notifications</Button>
        </Link>

        <Link href="/priority">
          <Button sx={{ color: "white" }}>Priority Inbox</Button>
        </Link>
      </Toolbar>
    </AppBar>
  )
}