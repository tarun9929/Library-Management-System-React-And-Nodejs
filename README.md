# Library-Management-System-React-And-Nodejs

<!-- Library List -->

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Library Management System</title>
    <link rel="stylesheet" href="src/output.css" />
    <link
      rel="stylesheet"
      href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200&icon_names=all"
    />
  </head>
  <body>
    <div class="w-fit sm:w-[80%] mx-auto py-6 shadow-2xl mt-6">
      <!-- title -->
      <h1 class="text-3xl text-center font-display">
        Library Management System
      </h1>

      <div class="px-6 mt-3 flex gap-8 justify-between">
        <div>
          <div class="flex gap-2 items-center">
            <span class="material-symbols-outlined"> history </span>
            <h2>Recent Books</h2>
          </div>
        </div>
        <div class="flex gap-2 items-center">
          <span class="material-symbols-outlined"> shopping_cart </span>
          <h2>Cart</h2>
        </div>
      </div>

      <div class="px-6">
        <table class="w-full border-collapse border-2 mt-4">
          <tr class="font-poppins text-left bg-[#2c2c2c] text-white">
            <th class="py-1 px-3"></th>
            <th class="py-1 px-3">SR.</th>
            <th class="py-1 px-3">Book ID</th>
            <th class="py-1 px-3">Book Name</th>
            <th class="py-1 px-3">Auther</th>
            <th class="py-1 px-3">Price</th>
            <th class="py-1 px-3">Pages</th>
            <th class="py-1 px-3">Availability</th>
          </tr>
          <tr class="font-poppins text-left cursor-pointer">
            <td class="py-1 px-3"><input type="checkbox" /></td>
            <td class="py-1 px-3">1.</td>
            <td class="py-1 px-3">1152424194</td>
            <td class="py-1 px-3">Harry Potter and the Philosopher's Stone</td>
            <td class="py-1 px-3">J.K. Rowling</td>
            <td class="py-1 px-3">&#8377; 259</td>
            <td class="py-1 px-3">200</td>
            <td class="py-1 px-3">50 PCS</td>
          </tr>
        </table>
      </div>
    </div>
  </body>
</html>
```
