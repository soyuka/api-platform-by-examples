<?php

use ApiPlatform\Core\DataPersister\DataPersisterInterface;
use App\DataProvider\BookDataProvider;
use App\DataPersister\BookDataPersister;
use App\Persistence\BookMemory;

$memory = new BookMemory();
$dataPersister = new BookDataPersister($memory);
$dataProvider = new BookDataProvider($memory);

return [$dataProvider, $dataPersister, '/src/api-platform/examples/persist/src/Model'];
