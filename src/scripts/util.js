function camelCaseToSnakeCase(str) {
  if(typeof str !== "string") throw new Error(`camelCaseToSnakeCase parameter should be a String!`)
  return str.replace(/\.?([A-Z])/g, function (x,y){return "-" + y.toLowerCase()}).replace(/^-/, "")
}

function snakeCaseToCamelCase(str) {
  if(typeof str !== "string") throw new Error(`snakeCaseToCamelCase parameter should be a String!`)
  return str.replace(/([-_]\w)/g, g => g[1].toUpperCase())
}

export {
  camelCaseToSnakeCase,
  snakeCaseToCamelCase
}