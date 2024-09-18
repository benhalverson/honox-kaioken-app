import { Hono } from 'hono'
import { renderer } from './renderer'
import { About } from './about';
import { Counter } from './counter';

const app = new Hono()

app.use(renderer)

app.get('/', (c) => {
  return c.render(<div>
    <h1>Hello</h1>
    <About />
    <Counter />
  </div>)
})

export default app
