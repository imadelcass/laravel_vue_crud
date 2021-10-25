<?php

namespace App\Http\Controllers;

use App\Models\Post;
use Illuminate\Http\Request;

class PostController extends Controller
{
    public function index()  
    {
        return Post::orderBy('updated_at', 'DESC')->get();
    }
    public function store(Request $request)
    {
        // validate the post
        $validated = $request->validate([
            'body' => 'required|min:5',
        ]);
        // store the post        
        $post = new Post();
        $post->body = $request->body;
        $post->user_id = $request->user_id;
        $post->save();
        return $post;
    }
    public function update(Request $request){
        $post = Post::find($request->id);
        $post->body = $request->body;
        $post->save();
        return $post;
    }
    // public function update(Post $post){
    //     $post->body = $post->body;
    //     $post->save();
    //     return $post;
    // }
    public function destroy(Post $post) {
        $post->delete();
        return $post;
    }
}
