const itemData = {
    title:'Write a blogpost for DAOHelper',
    description:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in er',
    reward:'$5',
    timeLeft:'2 days'
  }
  
  const columnsData = [
    {
      id:'column1',
      title:'OPEN BOUNTIES',
      color:'#C4C4C4',
      items:[
        {
          id:'column1-item1',
          ...itemData
        },
        {
          id:'column1-item2',
          ...itemData
        },
        {
          id:'column1-item3',
          ...itemData
        }
      ]
    },
    {
      id:'column2',
      title:'ASSIGNED/IN PROGRESS',
      color:'#5F71D4',
      items:[
        {
          id:'column2-item1',
          ...itemData
        },
        {
          id:'column2-item2',
          ...itemData
        },
        {
          id:'column2-item3',
          ...itemData
        }
      ]
    },
    {
      id:'column3',
      title:'UNDER REVIEW',
      color:'#A516B9',
      items:[
        {
          id:'column3-item1',
          ...itemData
        },
        {
          id:'column3-item2',
          ...itemData
        },
        {
          id:'column3-item3',
          ...itemData
        }
      ]
    },
    {
      id:'column4',
      title:'CLOSE / REWARDED',
      color:'#06DBAC',
      items:[
        {
          id:'column4-item1',
          ...itemData
        },
        {
          id:'column4-item2',
          ...itemData
        },
        {
          id:'column4-item3',
          ...itemData
        }
      ]
    }
  ]

  export default columnsData