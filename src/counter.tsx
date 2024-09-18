import { signal } from "kaioken"

export const Counter = () => {
  const count = signal(0)
  const increment = () => count.value++
  const decrement = () => count.value--
  console.log('count', count.value)
  
  return (
    <div className="flex gap-4">
      <button onclick={decrement}>-</button>
      <p>{count.value}</p>
      <button onclick={increment}>+</button>
    </div>
  )
}