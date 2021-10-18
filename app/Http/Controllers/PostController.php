<?php

namespace App\Http\Controllers;

use App\Models\Post;
use Illuminate\Http\Request;

class PostController extends Controller
{
    public function index()  
    {
        return Post::orderBy('created_at', 'DESC')->get();
    }
    public function store(Request $request)
    {
        // validate the post
        $validated = $request->validate([
            'body' => 'required|min:10',
        ]);
        if(!$validated){
            return 'error acurre';
        }
        // store the post        
        $post = new Post();
        $post->body = $request->body;
        $post->user_id = $request->user_id;
        $post->save();
        return $post;
    }
    public function destroy(Post $post) {
        $post->delete();
        return $post;
    }
}
