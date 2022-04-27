import './App.css';
import Testimonio from './componentes/Testimonio.js';

function App() {
  return (
    <div className='App'>
      <div className='contenedor-principal'>
        <h1>Este es el título de la página el título de la página </h1>
        <Testimonio 
          nombre='Juan Bosnio'
          pais='Bolivia'
          imagenn='cara2'
          cargo='Inegeniero Hardware'
          empresa='Facebook'
          testimonio= 'Maecenas vulputate viverra tortor eget lacinia. Interdum et malesuada fames ac ante ipsum primis in faucibus. Mauris quis euismod felis, nec faucibus justo. Etiam eu pellentesque augue. Ut tincidunt fermentum felis, et faucibus risus. Aliquam nec porta turpis. Mauris pharetra auctor ipsum et elementum. Cras vitae tempor dolor. Maecenas enim justo, eleifend id urna at, pretium venenatis nisl. In eget rutrum justo, a pretium sem.' />
        <Testimonio 
          nombre='María Garcia'
          pais='Perú'
          imagenn='cara3'
          cargo='Inegeniera Plantas'
          empresa='Instagram'
          testimonio='Interdum et malesuada fames ac ante ipsum primis in faucibus. Mauris quis euismod felis, nec faucibus justo. Etiam eu pellentesque augue. Ut tincidunt fermentum felis, et faucibus risus. Aliquam nec porta turpis. Mauris pharetra auctor ipsum et elementum. Cras vitae tempor dolor. Maecenas enim justo, eleifend id urna at, pretium venenatis nisl. In eget rutrum justo, a pretium sem.' />
        <Testimonio 
          nombre='Emma Bosnia'
          pais='Chile'
          imagenn='cara1'
          cargo='Inegeniera Software'
          empresa='Spotify'
          testimonio='Nunc tincidunt, urna congue malesuada facilisis, elit orci interdum libero, sed lobortis dui massa et arcu. Proin interdum tempus ex, a ullamcorper ipsum vestibulum sodales. Sed sed risus eu odio tristique molestie. Nullam aliquet egestas risus at accumsan. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.' />
      </div>
    </div>
  );
}

export default App;
