<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <link rel="stylesheet" href="/css/global.css">
  <link rel="stylesheet" href="/css/home.css">
  <title>Home Page</title>
</head>
<body>
  <%- include('partials/header') %>

  <main class="home-container">
    <!-- Left Sidebar -->
    <aside class="left-sidebar">
      <button class="btn add-review">Add Review</button>
      <button class="btn create-post">Create Post</button>
      <section class="favorite-companies">
        <h3>Favorite Companies</h3>
        <div class="favorite-placeholder">Your favorite companies will appear here</div>
      </section>
    </aside>

    <!-- Feed Section -->
    <section class="feed">
      <div class="feed-item">Spotify is a great company</div>
      <div class="feed-item">Costco defend DEI</div>
    </section>

    <!-- Right Sidebar -->
    <aside class="right-sidebar">
      <section class="top-companies">
        <h3>Top 5 Best Rated Companies</h3>
        <div class="list-placeholder">Best Companies List</div>
      </section>
      <section class="worst-companies">
        <h3>Top 5 Worst Rated Companies</h3>
        <div class="list-placeholder">Worst Companies List</div>
      </section>
    </aside>
  </main>

  <%- include('partials/footer') %>
  <script src="/js/global.js"></script>
  <script src="/js/home.js"></script>
</body>
</html>
