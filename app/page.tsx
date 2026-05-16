"use client"

import { useEffect, useState } from "react"
import api from "../services/api"
import Navbar from "../components/Navbar"
import NotificationCard from "../components/NotificationCard"
import { Container, Typography } from "@mui/material"

export default function Home() {
  const [notifications, setNotifications] = useState([])

  useEffect(() => {
    fetchData()
  }, [])

  const fetchData = async () => {
    try {
      const res = await api.get("/notifications")
      setNotifications(res.data)
    } catch (err) {
      console.log(err)
    }
  }

  return (
    <>
      <Navbar />
      <Container sx={{ mt: 3 }}>
        <Typography variant="h4">All Notifications</Typography>

        {notifications.map((n: any) => (
          <NotificationCard key={n.ID} item={n} viewed={false} />
        ))}
      </Container>
    </>
  )
}