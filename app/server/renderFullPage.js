export default function (html) {
    return `
        <!DOCTYPE html>
        <html>
        <head>
            <meta charset="utf-8">
                <title>React App</title>
                <link rel="stylesheet" type="text/css" href="/css/style.css">
        </head>
        <body>
        <div id="react-app">{html}</div>
        <script src="/js/app.js"></script>
        </body>
        </html>`;
}