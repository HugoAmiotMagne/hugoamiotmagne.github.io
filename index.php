<!DOCTYPE html>
<html lang="fr" class="h-100">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="description" content="Mon portfolio personnel présentant mes projets, mon CV et d'autres documents.">
    <title>Portfolio</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha3/dist/css/bootstrap.min.css" rel="stylesheet">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css">
    <link rel="stylesheet" href="assets/css/styles.css">
</head>
<body class="d-flex flex-column h-100">

    <?php include 'includes/navbar.php'; ?>

    <main class="flex-shrink-0">
        <section id="accueil" class="py-5 text-center bg-light">
            <div class="container">
                <h1 class="display-4">Bienvenue sur mon Portfolio</h1>
                <p class="lead">Découvrez mon parcours, mes projets et mes réalisations.</p>
            </div>
        </section>

        <?php include 'includes/cv.php'; ?>
        <?php include 'includes/projets.php'; ?>
        <?php include 'includes/competences.php'; ?>
    </main>

    <?php include 'includes/footer.php'; ?>

    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha3/dist/js/bootstrap.bundle.min.js"></script>
    <script src="assets/js/scripts.js"></script>
</body>
</html>
