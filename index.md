<html>
<head>
  <title>Ijay Narang</title>
  <meta http-equiv="content-type" content="text/html; charset=utf-8" />
  <meta name="description" content="" />
  <meta name="keywords" content="" />
  <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.2.1/css/all.min.css" rel="stylesheet">
  <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css">

  <style>
    /* Wrapper styling */
    .wrapper {
      max-width: 1200px; /* Adjust based on your preference */
      margin: 20px auto; /* Centered with margin */
      border: 5px solid #0322be; /* Thick border around the group */
      box-shadow: 10px 10px 20px rgba(0, 0, 0, 0.3); /* Shading for the pop-out effect */
      border-radius: 10px; /* Rounded corners */
      overflow: hidden; /* Ensures content stays within the border */
      background-color: #ffffff; /* Background for contrast */
    }

    /* Flexbox container for responsiveness */
    .flex-container {
      display: flex;
      flex-wrap: nowrap;
      min-height: 100%;
    }

    /* Sidebar styling */
    #sidebar {
      flex: 0 0 250px; /* Fixed width for the sidebar */
      background: #f8f9fa;
      padding: 20px;
      border-right: 2px solid #ddd; /* Subtle separator */
      min-height: 100%;
    }

    #main-content {
      flex: 1; /* Take the remaining width */
      padding: 20px;
      background: #fff;
    }

    #logo img {
      width: 100%;
      max-width: 150px;
      border-radius: 50%;
      display: block;
      margin: 0 auto;
    }

    #logo h1, #logo .byline {
      text-align: center;
      margin-top: 10px;
    }

    nav .list-group {
      margin-top: 20px;
    }

    nav .list-group-item {
      margin-bottom: 10px;
      font-size: 16px;
    }

    nav .list-group-item i {
      margin-right: 10px;
    }

  </style>
</head>
<body>
  <div class="wrapper">
    <div class="flex-container">
      <!-- Sidebar -->
      <div id="sidebar">
        <div id="logo">
          <img src="profile_pic.PNG" alt="Me" />
          <h1>Ijay Narang</h1>
          <p class="byline">inarang_at_gatech.edu</p>
          <p class="byline">ijay.narang_at_gmail.com</p>
        </div>
        <nav>
          <div class="list-group">
            <a href="#pubs" class="list-group-item list-group-item-action">
              <i class="fa-solid fa-file"></i>Publications
            </a>
            <a href="#talks" class="list-group-item list-group-item-action">
              <i class="fa-solid fa-circle-play"></i>Talks
            </a>
            <a href="#teach" class="list-group-item list-group-item-action">
              <i class="fa-solid fa-graduation-cap"></i>Teaching
            </a>
            <a href="#projects" class="list-group-item list-group-item-action">
              <i class="fa-solid fa-toolbox"></i>Projects
            </a>
            <a href="#about" class="list-group-item list-group-item-action">
              <i class="fa-solid fa-user"></i>About Me
            </a>
          </div>
        </nav>
      </div>

      <!-- Main Content -->
      <div id="main-content">
        <p>I am a first-year PhD student in the Algorithms, Combinatorics, and Optimization (ACO) program within the School of Computing at Georgia Tech. I am interested in:
          <u>Applied Probability</u>, <u> Statistics</u>, and <u>Optimization</u>. 
          
        <p>
          I completed my undergraduate studies at 
          <a href="http://cs.princeton.edu" target="_blank">Princeton University</a>, 
          where I majored in Computer Science and minored in Applied Mathematics, Optimization, and Finance. 
          During this time, I was fortunate to be advised by Dr. Pedro Paredes and Dr. Noga Alon.
        </p>
        

        <h3 id="pubs">Research</h3>
        <ul>

          <li><strong>Optimal detection of planted stars via a random energy model</strong>, with Will Perkins and Timothy Wee
            <a href="https://arxiv.org/abs/2602.15585" target="_blank">[View Paper Here]</a>
          </li>

          <li><strong>Steady-State Behavior of Constant-Stepsize Stochastic Approximation: Gaussian Approximation and Tail Bounds</strong>, with Zedong Wang, Yuyang Wang, Felix Wang, Yuzhou Wang, and Siva Theja Maguluri
            <a href="https://arxiv.org/abs/2602.13960" target="_blank">[View Paper Here]</a>
          </li>
          
          <li><strong>Sharp Inner Product Correlations for Hypercube Bijections</strong>, with Muchen Ju
            <a href="https://arxiv.org/abs/2509.00716" target="_blank">[View Paper Here]</a>
          </li>

          <li><strong>On even-H-free Colorings</strong>, Advised by Dr. Noga Alon
            <a href="works/even_H_free_colorings.pdf" target="_blank">[View Paper Here]</a>
          </li>
        

          <li><strong>On Expansion, High-Dimensional Expanders, and
            Applications in Coding Theory</strong>, Undergraduate Thesis (Advised by Dr. Pedro Paredes), 
            <a href="works/thesis.pdf" target="_blank">[View Paper Here]</a></li>
        </ul>
        
        <h3 id="talks">Talks</h3>
        <ul>
          <li><strong>Duke University Math Conference</strong>, Talk titled: <em>Expanding Square Complexes from Graph Products</em>
            <a href="https://math.duke.edu/research/research-grants/research-training-group/undergrad/undergrad-symposium24" target="_blank">[Details]</a></li>
        </ul>

        <h3 id="teach">Teaching</h3>
        <ul>
          <li>Fall 2024: UCA for COS 326 (Functional Programming) and Lab TA for COS 240 (Intro to TCS)</li>
          <li>Spring 2024: Lab TA for COS 240 and Grader for COS 445 (Algorithmic Game Theory)</li>
          <li>Spring 2023: COS 445 Grader</li>
          <li>Fall 2022: COS 445 Grader</li>
          <li>Spring 2022: COS 126 (Intro to Programming) Grader</li>
        </ul>

        <h3 id="projects">Projects</h3>
        <ul>
          <li><strong>Compass:</strong> all-in-one Princeton University course planning app -- now reached 700+ users!
            The application is currently being maintained by Hoagie Club and renamed to HoagiePlan.
            <a href="https://plan.hoagie.io/" target="_blank">See the App Here</a>
          </li>
        </ul>

        <h3 id="about">About Me</h3>
        <p>Outside of math + CS, I enjoy lifting and playing basketball + chess.</p>

  <script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
  <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.2/js/bootstrap.min.js"></script>

