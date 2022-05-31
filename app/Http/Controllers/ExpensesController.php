<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Expenses;

class ExpensesController extends Controller
{
    public function index()
    {
        return view('index');
    }

    public function fetch()
    {
        try
        {
            $data = Expenses::orderBy('id', 'DESC')->get();
            return response()->json($data);
        }
        catch(Exception $e)
        {
            Log::error($e);
        }
    }

    public function create()
    {
        //
    }

    public function store(Request $request)
    {
        try
        {
            $name = $request->get('name');
            $price = $request->get('price');
            $description = $request->get('description');

            Expenses::create([
                'name'   =>  $name,
                'price'  =>  $price,
                'description' => $description
            ]);

            return response()->json([
                'name'   =>  $name,
                'price'  =>  $price,
                'description' => $description
            ]);
        }
        catch(Exception $e)
        {
            Log::error($e);
        }
    }

    public function show($id)
    {
        //
    }

    public function edit($request)
    {
        try
        {
            $data = Expenses::findOrFail($request->get('id'));
            return response()->json($data);
        } catch (Exception $e) {
            Log::error($e);
        }
    }

    public function update(Request $request, $id)
    {
        try{
            $name = $request->get('name');
            $price = $request->get('price');
            $description = $request->get('description');

            Expenses::where('id', $id)->update([
                'name'   =>  $name,
                'price' =>  $price,
                'description' => $description
            ]);

            return response()->json([
                'name'   =>  $name,
                'price' =>  $price,
                'description' => $description
            ]);

        }catch(Exception $e){
            Log::error($e);
        }
    }

    public function destroy($id)
    {
        try
        {
            $data = Expenses::find($id);
            $data->delete();
        }
        catch(Exception $e)
        {
            Log::error($e);
        }
    }
}
