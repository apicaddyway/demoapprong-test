cube(`Demoapp`, {
  sql: `SELECT *  FROM demoapp.demoapp`,
  preAggregations: {// Pre-Aggregations definitions go here
    // Learn more here: https://cube.dev/docs/caching/pre-aggregations/getting-started  

    main: {
      measures: [Demoapp.count],
      dimensions: [Demoapp.name]
    }
  },
  joins: {},
  measures: {
    count22: {
      type: `count`,
      drillMembers: [name]
    }
  },
  dimensions: {
    name: {
      sql: `name`,
      type: `string`
    }
  }
});