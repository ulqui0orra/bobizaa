from flask import Flask, request, jsonify
from tiktokapi import TikTokApi
import os

app = Flask(__name__)

# Initialize TikTok API
api = TikTokApi()

@app.route('/download', methods=['POST'])
def download_video():
    data = request.get_json()
    if 'video_url' not in data:
        return jsonify({'error': 'Please provide the TikTok video URL'}), 400

    video_url = data['video_url']
    try:
        video = api.get_video_by_url(video_url)
        if video:
            # Save video to local storage
            filename = video_url.split('/')[-1] + '.mp4'
            filepath = os.path.join('videos', filename)
            with open(filepath, 'wb') as f:
                f.write(video)
            return jsonify({'success': True, 'message': 'Video downloaded successfully', 'filename': filename}), 200
        else:
            return jsonify({'error': 'Failed to download video'}), 500
    except Exception as e:
        return jsonify({'error': str(e)}), 500

if __name__ == '__main__':
    app.run(debug=True)
