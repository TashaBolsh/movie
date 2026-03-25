import s from "./Error404.module.css"
export const Error404 = () => {
  return (
    <div>
      <h1 className = {s.title}>404</h1>
      <h2 className = {s.subtitle}> page not found </h2>
    </div>
  )
}