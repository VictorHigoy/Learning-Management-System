<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">

        <title>Laravel</title>
        @viteReactRefresh
        @vite(['resources/sass/app.scss', 'resources/js/index.jsx'])

        <!-- Fonts -->
        

        <!-- Styles -->

    <link rel="stylesheet"
  href="https://cdn.jsdelivr.net/npm/boxicons@latest/css/boxicons.min.css"/>
  <!-- or -->
  <link rel="stylesheet"
  href="https://unpkg.com/boxicons@latest/css/boxicons.min.css"/>

    </head>
    <body>
        <main id='App'>

        </main>
    </body>
</html>
