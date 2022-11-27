<!-- Shahad Rashid Alkindi U21105659 -->

<!DOCTYPE html>

<!-- Fig. 19.16: database.php -->
<!-- Querying a database and displaying the results. -->
<html>
   <head>
      <meta charset = "utf-8">
      <title>Search Results</title>
	    <link rel = "stylesheet" type = "text/css" href = "css/nav.css">

   <style type = "text/css">
         body  { font-family: Baskerville-Old-Face;
                 background-color: #fcddbf; }
         table

          { 
            margin-left: auto; 
            margin-right: auto;

             border-style:solid;

            border-width:2px;

             border-color:pink;

           } 
           th {background-color: #7c5a51;} 
           tr {background-color: #e4b098;}
      </style>
   </head>
   <body> 
      <?php
     $select = $_POST["select"]; 
         $servername = "localhost";
		 $username = "root";
		 $password = "";
		 $dbname = "groupw";

		 $conn = new mysqli($servername, $username, $password, $dbname);
		 if ($conn->connect_error) {
		     die("Connection failed: " . $conn->connect_error);
		 }

		 $sql = "SELECT " . $select . " FROM credits";
		 $result = $conn->query($sql);

		

$conn->close();
      ?>
      <table border='1'>

<tr>

<th>ID</th>

<th>name</th>

<th>Pages</th>

</tr>

 

   <?php
	              while ( $row = mysqli_fetch_row( $result ) )
	              {
	                 print( "<tr>" );

	                 foreach ( $row as $value )
	                    print( "<td>$value</td>" );

	                 print( "</tr>" );
	              } 
				  ?>
</table>
   </body>
</html>