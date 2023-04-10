<div class="container">
    <form action="<?= BASEURL ?>/mahasiswa/insertdata" method="post">
        <div class="mb-3">
            <label for="username" class="form-label">Username</label>
            <input type="text" name="username" class="form-control" id="username" aria-describedby="emailHelp">
        </div>
        <div class="mb-3">
            <label for="email" class="form-label">Email</label>
            <input type="email" name="email" class="form-control" id="email" aria-describedby="emailHelp">
        </div>
        <div class="mb-3">
            <label for="nohp" class="form-label">No. HP</label>
            <input type="number" class="form-control" id="nohp" aria-describedby="emailHelp">
        </div>
        <button type="submit" name="nohp" class="btn btn-primary">Submit</button>
    </form>
</div>