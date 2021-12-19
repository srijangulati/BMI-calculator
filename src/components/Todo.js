export function Todo(props) {
  return (
    <>
    <div className="todo">
      <div> {props.name}</div>
      <button> Done </button>
      <button> Remove </button>
    </div>
  </>
  )
}