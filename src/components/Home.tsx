import { Layout } from "~/components/Layout"

export const Home = () => {
  return (
  <Layout>
	  <h1 style={{ fontSize: '1.5rem' }}>Component List</h1>
	  <menu style={{ paddingLeft: 0, display: 'grid', gridTemplateColumns: 'max-content', justifyItems: 'center', justifyContent: 'center' }}>
		<a href='#demo:smalladdress'>Small Address</a>
		<a href='#demo:bigaddress'>Big Address</a>
	  </menu>
	</Layout>
  )
}
