//импортируем фреймворки экспресс для создания сервера на компьютере и path для указания правильных путей к файлам
import express from 'express'
import path from 'path'
//создаем переменную для созданию абсолютного пути до корневой папки
const __dirname = path.resolve();
//создаем переменную для порта, по умолчанию порт 4000
const PORT = process.env.PORT ?? 4000;
//создаем переменную для экземпдяра экспресс
const app = express();

//задаем путь к папке статик, чтобы экспресс имел доступ ко всем файлам в папке
app.use(express.static(path.resolve(__dirname, 'static')))

//запускаем сервер
app.listen(PORT, () => {
console.log(`server has been started on port ${PORT}...`)
})
