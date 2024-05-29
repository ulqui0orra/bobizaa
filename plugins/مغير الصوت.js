function _0xe62b(_0x57b59e, _0x14ccdb) {
    const _0xe62b91 = _0x14cc();
    _0xe62b = function (_0x159207, _0x24cacf) {
        _0x159207 = _0x159207 - 0x0;
        let _0x178a94 = _0xe62b91[_0x159207];
        return _0x178a94;
    };
    return _0xe62b(_0x57b59e, _0x14ccdb);
}
const _0x149322 = _0xe62b;
(function (_0x51c137, _0x338f81) {
    const _0x52f258 = _0xe62b;
    const _0x2175fd = _0x51c137();
    while (!![]) {
        try {
            const _0x5ababc = -parseInt(_0x52f258(0x2a)) / 0x1 * (-parseInt(_0x52f258(0x9)) / 0x2) + -parseInt(_0x52f258(0x1)) / 0x3 + parseInt(_0x52f258(0x1f)) / 0x4 * (parseInt(_0x52f258(0x8)) / 0x5) + -parseInt(_0x52f258(0x23)) / 0x6 * (-parseInt(_0x52f258(0x19)) / 0x7) + parseInt(_0x52f258(0x20)) / 0x8 + parseInt(_0x52f258(0xc)) / 0x9 + -parseInt(_0x52f258(0xa)) / 0xa;
            if (_0x5ababc === _0x338f81) {
                break;
            } else {
                _0x2175fd['push'](_0x2175fd['shift']());
            }
        } catch (_0x340ce5) {
            _0x2175fd['push'](_0x2175fd['shift']());
        }
    }
}(_0x14cc, 0xcc8b5));
import {
    unlinkSync,
    readFileSync
} from 'fs';
import {
    join
} from 'path';
import {
    exec
} from 'child_process';

function _0x14cc() {
    const _0x4adad4 = ['6drhYmP', 'Error', '-af equalizer=f=94:width_type=o:width=2:g=30', 'tupai', 'audioMessage', 'command', 'fat', '38wYoqVa', 'floor', '3105192zAYNXx', 'test', 'nightcore', '-af atempo=4/4,asetrate=44500*2/3', '../tmp/', '-filter:a \"atempo=0.7,asetrate=44100\"', 'quoted', '5694075aelMcr', '17070ETJBGu', '20339690AySATP', 'slow', '3866301RPMUCT', 'blown', 'ffmpeg -i ', ' [vn]', '-filter:a \"atempo=0.5,asetrate=65100\"', '-filter_complex \"areverse\"', '.mp3', 'msg', 'chat', '-filter_complex \"afftfilt=real=\'hypot(re,im)*sin(0)\':imag=\'hypot(re,im)*cos(0)\':win_size=512:overlap=0.75\"', '-filter:a \"atempo=1.63,asetrate=44100\"', 'deep', '-af acrusher=.1:1:64:0:log', '10052714JrBHbI', 'robot', 'tags', 'fast', 'download', '-filter:a \"atempo=1.6,asetrate=22100\"', '4ZAGKkD', '4624080oaUMAi', '-af volume=12', 'reverse'];
    _0x14cc = function () {
        return _0x4adad4;
    };
    return _0x14cc();
}
let handler = async (_0x2ceec0, {
    conn: _0x2940c2,
    args: _0x1840b5,
    __dirname: _0x5c2d0d,
    usedPrefix: _0x3d1bfe,
    command: _0x1e259f
}) => {
    const _0x3e8577 = _0xe62b;
    try {
        let _0x10270a = _0x2ceec0[_0x3e8577(0x7)] ? _0x2ceec0[_0x3e8577(0x7)] : _0x2ceec0;
        let _0xce0b5e = (_0x2ceec0[_0x3e8577(0x7)] ? _0x2ceec0[_0x3e8577(0x7)] : _0x2ceec0[_0x3e8577(0x13)])['mimetype'] || '';
        let _0x42ce7f;
        if (/عميق/ [_0x3e8577(0x2)](_0x1e259f)) _0x42ce7f = _0x3e8577(0x25);
        if (/منفوخ/ [_0x3e8577(0x2)](_0x1e259f)) _0x42ce7f = _0x3e8577(0x18);
        if (/تخين/ [_0x3e8577(0x2)](_0x1e259f)) _0x42ce7f = _0x3e8577(0x4);
        if (/صاخب/ [_0x3e8577(0x2)](_0x1e259f)) _0x42ce7f = _0x3e8577(0x21);
        if (/سريع/ ['test'](_0x1e259f)) _0x42ce7f = _0x3e8577(0x16);
        if (/تخينن/ [_0x3e8577(0x2)](_0x1e259f)) _0x42ce7f = _0x3e8577(0x1e);
        if (/رفيع/ [_0x3e8577(0x2)](_0x1e259f)) _0x42ce7f = '-filter:a atempo=1.06,asetrate=44100*1.25';
        if (/تقطيع/ ['test'](_0x1e259f)) _0x42ce7f = _0x3e8577(0x11);
        if (/روبوت/ [_0x3e8577(0x2)](_0x1e259f)) _0x42ce7f = _0x3e8577(0x15);
        if (/بطيء/ [_0x3e8577(0x2)](_0x1e259f)) _0x42ce7f = _0x3e8577(0x6);
        if (/ناعم/ [_0x3e8577(0x2)](_0x1e259f)) _0x42ce7f = '-filter:v \"minterpolate=\'mi_mode=mci:mc_mode=aobmc:vsbmc=1:fps=120\'\"';
        if (/سنجاب/ [_0x3e8577(0x2)](_0x1e259f)) _0x42ce7f = _0x3e8577(0x10);
        if (/audio/ [_0x3e8577(0x2)](_0xce0b5e)) {
            let _0x5c8e6c = getRandom(_0x3e8577(0x12));
            let _0x23a974 = join(_0x5c2d0d, _0x3e8577(0x5) + _0x5c8e6c);
            let _0x110346 = await _0x10270a[_0x3e8577(0x1d)](!![]);
            exec(_0x3e8577(0xe) + _0x110346 + ' ' + _0x42ce7f + ' ' + _0x23a974, async (_0x50ff49, _0x1f1bd7, _0x169d1b) => {
                const _0x5db5b0 = _0xe62b;
                await unlinkSync(_0x110346);
                if (_0x50ff49) throw _0x5db5b0(0x24);
                let _0x512617 = await readFileSync(_0x23a974);
                _0x2940c2['sendFile'](_0x2ceec0[_0x5db5b0(0x14)], _0x512617, _0x5c8e6c, null, _0x2ceec0, !![], {
                    'type': _0x5db5b0(0x27),
                    'ptt': !![]
                });
            });
        } else throw '*رد على الصوت الذي تريد تحويله، استخدم الامر التالي ' + (_0x3d1bfe + _0x1e259f) + '*';
    } catch (_0x5eb75a) {
        throw _0x5eb75a;
    }
};
handler['help'] = ['bass', _0x149322(0xd), _0x149322(0x17), 'earrape', _0x149322(0x1c), _0x149322(0x29), _0x149322(0x3), _0x149322(0x22), _0x149322(0x1a), _0x149322(0xb), 'smooth', _0x149322(0x26)]['map'](_0x2cbb54 => _0x2cbb54 + _0x149322(0xf));
handler[_0x149322(0x1b)] = ['audio'];
handler[_0x149322(0x28)] = /^(عميق|منفوخ|تخين|صاخب|سريع|تخينن|رفيع|روبوت|بطيء|ناعم|سنجاب)$/i;
export default handler;
const getRandom = _0x39b8b9 => {
    const _0x1c6d77 = _0xe62b;
    return '' + Math[_0x1c6d77(0x0)](Math['random']() * 0x2710) + _0x39b8b9;
};
