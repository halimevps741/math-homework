const getRandomNodeJsCode = () => {
  const nodes = [
    {
      id: 'node1',
      name: 'Node 1',
      type: 'input'
    },
    {
      id: 'node2',
      name: 'Node 2',
      type: 'output'
    }
  ];
  const edges = [
    { from: 'node1', to: 'node2' }
  ];
  return { nodes, edges };
};
