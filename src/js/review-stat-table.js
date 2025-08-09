/* 
Атрибуты для настройки таблицы статистики:

1. data-stat  
— Обязательный атрибут контейнера таблицы.  
— В качестве значения указывается класс для создаваемых линий.  
— Если атрибут не указан, будет использоваться класс "line" по умолчанию.

2. data-stat-gap  
— Определяет расстояние (column-gap) между линиями.  
— Значение указывается в пикселях и будет автоматически преобразовано в rem (по формуле: значение / 16).  
— По умолчанию: 5px.

3. data-stat-item  
— Указывается на элемент, который содержит одну пару значений и блок для линий.

4. data-stat-row  
— Элемент внутри data-stat-item, в который будут вставлены линии.  
— Для корректной работы должен присутствовать в каждом data-stat-item.

5. data-stat-value  
— Элемент, из которого скрипт берет числовое значение для расчета ширины линий.  
— В одном data-stat-item должно быть два таких элемента.

⚠️ Важно:
— Если значение не является числом (например, начинается с буквы), оно будет интерпретировано как `0`.  
— Пример плохого значения: `<div data-stat-value>number2</div>` → будет интерпретировано как 0.  
— Пример хорошего значения: `<div data-stat-value>2</div>`  
— Также допустимы значения с `%`: `<div data-stat-value>2%</div>`

Особое поведение:
— Если одно значение значительно превышает другое (например: 1 и 0), то для элемента с `data-stat-row` будет установлен `column-gap: 0`.
*/


window.addEventListener('load', () => {
  createGameState()
})

function createGameState() {
  const gameTables = document.querySelectorAll('[data-stat]')
  if (!gameTables.length) return

  gameTables.forEach(table => {
    const columnGap = parseInt(table.getAttribute('data-stat-gap'), 10) || 5
    const items = table.querySelectorAll('[data-stat-item]')
    items.forEach(item => {
      fillStatCard(item, 'item-game-stat__line', columnGap)
    })
  })
}

function fillStatCard(card, classNameForLine, columnGap) {
  const values = [...card.querySelectorAll('[data-stat-value]')].map(elValue =>
    parseFloat(elValue.textContent.trim())
  )

  const valueFirst = isNaN(values[0]) ? 0 : values[0]
  const valueSecond = isNaN(values[1]) ? 0 : values[1]
  const [lineFirst, lineSecond] = calcWidthLines(valueFirst, valueSecond)

  const row = card.querySelector('[data-stat-row]')
  if (!row) return

  // Очищаем, чтобы при перезапуске не дублировались линии
  row.innerHTML = ''

  // Добавляем линии
  row.append(createLine(classNameForLine))
  row.append(createLine(classNameForLine))

  // Ставим стили
  row.style.columnGap = `${columnGap / 16}rem`
  row.style.setProperty('grid-template-columns', `${lineFirst}fr ${lineSecond}fr`)
  row.style.display = 'grid'

  if (lineFirst === 1 || lineSecond === 1) {
    row.style.columnGap = 0
  }
}

function calcWidthLines(firstValue, secondValue) {
  const totalSum = firstValue + secondValue
  if (totalSum === 0) return [0.5, 0.5] // чтобы не было NaN при делении на 0
  const widthFirstLine = Math.floor((firstValue / totalSum) * 100) / 100
  const widthSecondLine = Math.floor((secondValue / totalSum) * 100) / 100
  return [widthFirstLine, widthSecondLine]
}

function createLine(classForLine) {
  const line = document.createElement('div')
  line.className = classForLine
  return line
}
