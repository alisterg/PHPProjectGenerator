// TODO refactor all this

// expects array of options eg api database csv etc
function parseInput(input) {
  return Object.keys(input).map(function (key) { return input[key] })
}

// expects an obj hydrated by the input array (maybe change input into obj)
function buildComposerJson(input) {
  let json = {}
  json.name = "My Project"
  json.require = {}
  json.repositories = []
  json.autoload = {}
  json.autoload.psr4 = {}

  input.forEach((element) => {

    switch (element) {
      case "api":
        json.require["api"] = "dev/master"
        json.autoload.psr4["api\\"] = "src/api"
        json.repositories.push({
          "type": "vcs",
          "url": "https://github.com/stuff"
        })
        break

      case "database":
        json.require["database"] = "dev/master"
        json.autoload.psr4["database\\"] = "src/database"
        json.repositories.push({
          "type": "vcs",
          "url": "https://github.com/stuff"
        })
        break

      default:
        break
    }
  })

  return json
}
