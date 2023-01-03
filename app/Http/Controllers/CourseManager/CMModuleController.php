<?php

namespace App\Http\Controllers\CourseManager;

use Illuminate\Http\Request;
use App\Models\Modules\Module;
use App\Http\Controllers\Controller;
use App\Http\Requests\CourseManager\ModuleRequest;

class CMModuleController extends Controller
{
    public function index()
    {

    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(ModuleRequest $request)
    {

        $id = $request['course_code'] . '-' . $request['course_id'] . '-' . $request['module_week'];
        
        $exist = Module::where('id', $id)->where('course_id', $request['course_id'])->get();

        $bool = 'True';

        if($exist == '[]'){
            $bool = 'False';
        }

        if($bool == 'True'){  
            return response(['already exist'], 201);
        }

        Module::create([
            'id' => $id,
            'course_id' => $request['course_id'],
            'week' => $request['module_week'],
            'status' => $request['status']
        ]);

        $response = [
            'Module Succesfully created' => $request['course_code'] . 'week' . $request['module_week'],
        ];

        return response($response, 201);

    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {

        $modules = Module::where('course_id', $id)->get();
        
        return response([
            'Module' => $modules,
        ], 201);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        //
    }
}
