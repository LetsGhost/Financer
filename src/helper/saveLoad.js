import fs from 'fs'
import os from 'os'

const folderPath = os.homedir() + '/FinanceApp/'

export function load() {
  try {
    if (!fs.existsSync(folderPath)) {
      fs.mkdirSync(folderPath, { recursive: true })
    }

    if (!fs.existsSync(folderPath + 'data.json')) {
      fs.writeFileSync(folderPath + 'data.json', JSON.stringify({}), 'utf-8')
    }

    return JSON.parse(fs.readFileSync(folderPath + 'data.json', 'utf-8'))
  } catch (error) {
    console.error('Error loading data:', error)
  }
}
