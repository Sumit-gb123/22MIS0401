"use client"

import { useEffect, useState } from "react"
import api from "../../services/api"
import Navbar from "../../components/Navbar"
import NotificationCard from "../../components/NotificationCard"
import { Container, Typography, Select, MenuItem } from "@mui/material"

export default function Priority() {
  const [notifications, setNotifications] = useState([])
  const [limit, setLimit] = useState(10)

  useEffect(() => {
    fetchData()
  }, [limit])

  const fetchData = async () => {
    try {
      const res = await api.get("/notifications")
      setNotifications(res.data.slice(0, limit))
    } catch (err) {
      console.log(err)
    }
  }

  return (
    <>
      <Navbar />
      <Container sx={{ mt: 3 }}>
        <Typography variant="h4">Priority Inbox</Typography>
<Select
  value={limit}
  onChange={(e: any) => setLimit(Number(e.target.value))}
>
  <MenuItem value={10}>Top 10</MenuItem>
  <MenuItem value={15}>Top 15</MenuItem>
  <MenuItem value={20}>Top 20</MenuItem>
</Select>
        {notifications.map((n: any) => (
          <NotificationCard key={n.ID} item={n} viewed={false} />
        ))}
      </Container>
    </>
  )
}