const weights: any = {
  Placement: 3,
  Result: 2,
  Event: 1
}

export function getPriority(item: any) {
  const now = Date.now()
  const time = new Date(item.Timestamp).getTime()

  const age = (now - time) / 60000

  return weights[item.Type] * 100 + (100 - age)
}