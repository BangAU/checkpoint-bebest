<?php 
include "header.php";
?>
<body>
<div id="wrapper">
<?php 
    include "navigation.php";
    include "sidebar.php"; 
?>
                

<!-- Page Content -->
<div id="page-wrapper">
    <div class="container-fluid">
        <div class="row">
            <div class="col-lg-12">
                <table id="report-data-contact" class="display report" cellspacing="0" width="100%">
    <thead class="report__header">
        <tr>
            <th class="report__first-cell">ID</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Email</th>
            <th>Business Name</th>
            <th>Phone</th>
            <th>Date / Time</th>
        </tr>
    </thead>
    <tfoot class="report__footer">
        <tr>
            <th class="report__first-cell">ID</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Email</th>
            <th>Business Name</th>
            <th>Phone</th>
            <th>Date / Time</th>
        </tr>
    </tfoot>
    <tbody>
<?php
 $toaddsql="";
                        
 $sql = "SELECT * FROM contact ".$toaddsql. " ORDER BY id DESC";
$result = mysqli_query($conn,$sql);

if ($result->num_rows > 0) {
    while($row = $result->fetch_assoc()) {
        print "
        <tr>
            <td class=\"report__first-cell\">" . $row["id"]. "</td>
            <td>" . $row["firstname"]. "</td>
            <td>" . $row["lastname"]. "</td>
            <td>" . $row["email"]. "</td>
            <td>" . $row["businessname"]. "</td>
            <td>" . $row["phone"]. "</td>
			<td>" . $row["insert_date"]. "</td></tr>"; 
    }
} 
?>
    </tbody>
</table>
                    </div>
                    <!-- /.col-lg-12 -->
                </div>
                <!-- /.row -->
            </div>
            <!-- /.container-fluid -->
        </div>
        <!-- /#page-wrapper -->

    </div>
    <!-- /#wrapper -->

<?php 
	include "js-include.php";
?>