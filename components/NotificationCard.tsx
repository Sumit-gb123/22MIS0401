"use client"

import { Card, CardContent, Typography, Chip } from "@mui/material"

export default function NotificationCard({ item, viewed }: any) {
  return (
    <Card
      sx={{
        mb: 2,
        borderLeft: viewed ? "4px solid gray" : "4px solid blue"
      }}
    >
      <CardContent>
        <Typography variant="h6">{item.Message}</Typography>

        <Chip label={item.Type} sx={{ mt: 1 }} />

        <Typography variant="body2" sx={{ mt: 1 }}>
          {item.Timestamp}
        </Typography>
      </CardContent>
    </Card>
  )
}