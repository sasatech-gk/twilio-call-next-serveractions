export default async function Page() {
  return (
    <form action={async (formData) => {
    }}>
      <input type={"tel"} name={"tel"} defaultValue={"12345678"} placeholder={"7012345678"}/>
      <input type={"submit"}/>
    </form>
  )
}