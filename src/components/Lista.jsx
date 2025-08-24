import Item from './Item'
function Lista() {
    const itens =[
         { id: 1,nome: 'teclado', valor: 'R$ 150', categoria: 'Periférico', disponibilidade: true},
         { id: 2, nome: 'Mouse', valor: 'R$ 80', categoria: 'Periférico', disponibilidade: true },
         { id: 3, nome: 'Monitor', valor: 'R$ 1200', categoria: 'Display', disponibilidade: false },
         { id: 4, nome: 'Headset', valor: 'R$ 250', categoria: 'Áudio', disponibilidade: true },
         { id: 5, nome: 'Webcam', valor: 'R$ 180', categoria: 'Vídeo', disponibilidade: true },
         { id: 6, nome: 'Cadeira Gamer', valor: 'R$ 900', categoria: 'Mobiliário', disponibilidade: true },
         { id: 7, nome: 'Notebook', valor: 'R$ 3500', categoria: 'Computador', disponibilidade: false },
         { id: 8, nome: 'SSD 1TB', valor: 'R$ 450', categoria: 'Armazenamento', disponibilidade: true },
         { id: 9, nome: 'Fonte 650W', valor: 'R$ 400', categoria: 'Hardware', disponibilidade: true },
         { id: 10, nome: 'Hub USB-C', valor: 'R$ 150', categoria: 'Acessório', disponibilidade: true },
        
    ]

     return (
    <>
      <h2>Minha Lista de Produtos</h2>
      <ul>
        {itens.map((item) => (
          <Item
            key={item.id}
            nome={item.nome}
            valor={item.valor}
            categoria={item.categoria}
            disponibilidade={item.disponibilidade}
          />
        ))}
      </ul>
    </>
  );
}
export default Lista;
    
    
