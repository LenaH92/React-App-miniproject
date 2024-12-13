import List from "../List"

function Dashboard({products, handleDelete}) {
  // eslint-disable-next-line no-unused-vars

  return (
    <List products={products} handleDelete ={handleDelete}/>
  );
}

export default Dashboard;
//home page has-> banner, dashboard, about, footer 