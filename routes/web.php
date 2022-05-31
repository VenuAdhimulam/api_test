<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\ExpensesController;

// Route::get('/{path?}', function () {
//     return view('index');
// })->where('path','.*');

Route::get('/', [ExpensesController::class, 'index']);
Route::get('/fetchExpenses', [ExpensesController::class, 'index']);
Route::get('/getExpenses', [ExpensesController::class, 'fetch']);
Route::post('/saveExpenses', [ExpensesController::class, 'store'])->name('store');;
Route::post('/editExpense', [ExpensesController::class, 'edit']);
Route::put('/updateExpenses/{id}', [ExpensesController::class, 'update']);
Route::delete('/deleteExpenses/{id}', [ExpensesController::class, 'destroy']);