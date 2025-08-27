import Item from './Item'
function Lista() {

     return (
      <>
      <h2>Minha Lista de Produtos</h2>
      
         <Item  nome= 'Teclado' valor= 'R$ 150' categoria= 'Periférico' disponibilidade = {true} />
         <img src="/public/teclado.jpg" alt="Teclado" width={350} />
         <Item  nome= 'Mouse' valor= 'R$ 80' categoria= 'Periférico' disponibilidade= {true} />
         <img src='/public/mouse.jpg'alt='Mouse'width={250}/>   
         <Item  nome= 'Monitor' valor= 'R$ 1200' categoria= 'Display' disponibilidade= {false}/>
         <img src='/public/monitor.jpg' alt='Monitor'width={250}/>
         <Item  nome= 'Headset' valor= 'R$ 250' categoria= 'Áudio' disponibilidade= {true}/>
         <img src='/public/headset.jpg' alt='Headset'width={250}/>
         <Item  nome= 'Webcam' valor= 'R$ 180' categoria= 'Vídeo' disponibilidade= {true}/>
         <img src='/public/webcam.jpg' alt='webcam'width={250}/>
         <Item  nome= 'Cadeira Gamer' valor= 'R$ 900' categoria= 'Mobiliário' disponibilidade= {true}/>
         <img src='/public/cadeira.jpg' alt='cadeira'width={250}/>
         <Item  nome= 'Notebook' valor= 'R$ 3500' categoria= 'Computador' disponibilidade= {false}/>
         <img src='/public/notebook.jpg' alt='notebook'width={250}/>
         <Item  nome= 'SSD 1TB' valor= 'R$ 450' categoria= 'Armazenamento' disponibilidade= {true}/>
         <img src='/public/ssd.jpg' alt='ssd'width={250}/>
         <Item  nome= 'Fonte 650W' valor= 'R$ 400' categoria= 'Hardware' disponibilidade= {true}/>
         <img src='/public/fonte.jpg' alt='fonte'width={250}/>
         <Item  nome= 'Hub USB-C' valor= 'R$ 150' categoria= 'Acessório' disponibilidade= {true}/>
         <img src='/public/hub.jpg' alt='hub'width={280}/>
  
      
     
    </>
  );
}
export default Lista;
    
    
