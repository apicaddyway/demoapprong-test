cube(`Demoapp`, {
  sql: `SELECT * FROM demoapp.demoapp`,
  
  preAggregations: {
    // Pre-Aggregations definitions go here
    // Learn more here: https://cube.dev/docs/caching/pre-aggregations/getting-started  
  },
  
  joins: {
    
  },
  
  measures: {
    count: {
      type: `count`,
      drillMembers: [name]
    }
  },
  
  dimensions: {
    name222: {
      sql: `name`,
      type: `string`
    }
  }
});
