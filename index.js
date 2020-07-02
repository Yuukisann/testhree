const loading = document.getElementsByClassName('loading1')[0];
const contents = document.getElementById('contents');

window.addEventListener("load", init);

function init(){
  contents.style.display = 'block';
  loading.style.display = 'none';

  const width = innerWidth;
  const height = innerHeight;

  const renderer = new THREE.WebGLRenderer({
    canvas: document.querySelector('#myCanvas')
  })
  renderer.setPixelRatio(devicePixelRatio);
  renderer.setSize(width,height);
  const scene = new THREE.Scene();

  const camera = new THREE.PerspectiveCamera(
    75, width/ height
  );
  camera.position.set(0,0,+1000);
  camera.aspect = width / height;
  camera.updateProjectionMatrix();

  const controls = new THREE.OrbitControls(camera,document.getElementById('myCanvas'));

  const geometry = new THREE.BoxGeometry(500,500,500);
  const textureLoader = new THREE.TextureLoader();
  const texture0 = textureLoader.load('./img/puzzleright.jpg');
  const texture1 = textureLoader.load('./img/puzzleleft.jpg');
  const texture2 = textureLoader.load('./img/puzzleup.jpg');
  const texture3 = textureLoader.load('./img/puzzledown.jpg');
  const texture4 = textureLoader.load('./img/puzzlefront.jpg');
  const texture5 = textureLoader.load('./img/puzzlebottom.jpg');

  const materials = [
    new THREE.MeshBasicMaterial( { map: texture0 } ),
    new THREE.MeshBasicMaterial( { map: texture1 } ),
    new THREE.MeshBasicMaterial( { map: texture2 } ),
    new THREE.MeshBasicMaterial( { map: texture3 } ),
    new THREE.MeshBasicMaterial( { map: texture4 } ),
    new THREE.MeshBasicMaterial( { map: texture5 } )
  ];
  const faceMaterial = new THREE.MeshFaceMaterial( materials );
  const box = new THREE.Mesh(geometry,faceMaterial);
  scene.add(box);
  
  const light = new THREE.DirectionalLight(0xffffff);
    light.intensity = 2; // 光の強さを倍に
  light.position.set(1, 1, 1);
  // シーンに追加
  scene.add(light);


  tick();

  function tick(){
    requestAnimationFrame(tick);
    // box.rotation.y += 0.01;
    renderer.render(scene,camera)
  }
}
// function init() {
//   contents.style.display = 'block';
//   loading.style.display = 'none';

//   const width = 840;
//   const height = 540;

//   // レンダラーを作成
//   const renderer = new THREE.WebGLRenderer({
//     canvas: document.querySelector("#myCanvas")
//   });
//   renderer.setPixelRatio(window.devicePixelRatio);
//   renderer.setSize(width, height);

//   // シーンを作成
//   const scene = new THREE.Scene();

//   // カメラを作成
//   const camera = new THREE.PerspectiveCamera(
//     75,
//     width / height,
//     1,
//     10000
//   );
//   camera.position.set(0, 0,+1000);

//   // 箱を作成
//   const geometry = new THREE.SphereGeometry(300,30,30)
//   const loader = new THREE.TextureLoader();
//   const texture = loader.load('img/earth.jpg')
//   const material = new THREE.MeshStandardMaterial({
//     map: texture
//   });
//   const box = new THREE.Mesh(geometry, material);
//   scene.add(box);

//   // 平行光源
//   const light = new THREE.DirectionalLight(0xffffff);
//   light.intensity = 2; // 光の強さを倍に
//   light.position.set(1, 1, 1);
//   // シーンに追加
//   scene.add(light);

//   // 初回実行
//   tick();

//   function tick() {
//     requestAnimationFrame(tick);

//     // 箱を回転させる
//     box.rotation.x -= 0.01;
//     box.rotation.y -= 0.01;

//     // レンダリング
//     renderer.render(scene, camera);
//   }
// }

// function init(){
//   contents.style.display = 'block';
//   loading.style.display = 'none';
//   const width = 860;
//   const height = 540;

//   const scene = new THREE.Scene();
//   const buttonGeometry = new THREE.BoxGeometry(5,5,5);

//   const hatMaterial = new THREE.MeshLambertMaterial({ color: 0x333333 })
//   const headMaterial = new THREE.MeshLambertMaterial({ color: 0xffffff })
//   const buttonMaterial = new THREE.MeshLambertMaterial({ color: 0x228b22 })

//   const eyeMaterial = new THREE.MeshToonMaterial({ color: 0x000000 });

//   const hat = new THREE.Mesh(
//     //円柱のジオメトリー(上面半径,下面半径,高さ,円周分割数)
//     new THREE.CylinderGeometry(25, 25, 40, 30),
//     hatMaterial
//   );
//   hat.position.set(0, 50, 0); //(x,y,z)

  
//   const hat_line = new THREE.Mesh(
//     new THREE.CylinderGeometry(26, 25, 20, 30),
//     new THREE.MeshLambertMaterial({ color: 0xe60033 })
//   );
//   hat_line.position.set(0, 35, 0);

//   const hat_collar = new THREE.Mesh(
//     new THREE.CylinderGeometry(40, 40, 5, 30),
//     hatMaterial
//   );
//   hat_collar.position.set(0, 32, 0);

//   const head = new THREE.Mesh(
//     //球のジオメトリー（半径,緯度分割数,経度分割数）
//     new THREE.SphereGeometry(40, 40, 20),
//     headMaterial
//   );
//   head.position.set(0, 0, 0);

//   const right_eye = new THREE.Mesh(
//     new THREE.SphereGeometry(5, 25, 40),
//     eyeMaterial
//   );
//   right_eye.position.set(15, 18, 30);

//   const left_eye = new THREE.Mesh(
//     new THREE.SphereGeometry(5, 10, 40),
//     eyeMaterial
//   );
//   left_eye.position.set(-16, 18, 33);

//   const nose = new THREE.Mesh(
//     new THREE.SphereGeometry(5, 30, 20),
//     new THREE.MeshLambertMaterial({ color: 0xed9121 })
//   );
//   nose.position.set(3, 10, 35);

//   const body = new THREE.Mesh(
//     new THREE.SphereGeometry(50, 50, 50),
//     headMaterial
//   );
//   body.position.set(0, -60, 0);

//   const button_first = new THREE.Mesh(
//     buttonGeometry,
//     buttonMaterial
//   );
//   button_first.position.set(0, -30, 37);

//   const button_second = new THREE.Mesh(
//     buttonGeometry,
//     buttonMaterial
//   );
//   button_second.position.set(0, -40, 43);

//   const snowman = new THREE.Group(); //メッシュをグループ化
//   snowman.add(hat,hat_line,hat_collar,head,right_eye,left_eye,nose,body,button_first,button_second);
//   scene.add(snowman); //3D空間にsnowmanを配置

//   // light
//   //平行光源(ディレクショナルライト)：一方向から同じ強さで平行に照らすライト(色, 光の強さ)
//   const light = new THREE.DirectionalLight(0xffffff, 0.9);
//   light.position.set(0, 50, 30); //ライトの位置(x,y,z)
//   scene.add(light); //シーンにディレクショナルライトを追加

//   //環境光源(アンビエントライト)：すべてを均等に照らす、影のない、全体を明るくするライト
//   const ambient = new THREE.AmbientLight(0xf8f8ff, 0.9);
//   scene.add(ambient); //シーンにアンビエントライトを追加

//   // camera
//   //遠近感のあるカメラ(視野角,上映するスクリーンの縦横比,カメラから手前までの距離,カメラから奥までの距離)
//   const camera = new THREE.PerspectiveCamera(90, width / height, 1, 1000);
//   camera.position.set(60, 50, 140); //(x,y,z)
//   camera.lookAt(scene.position); //カメラの視点（注視点)
//   const controls = new THREE.OrbitControls(camera,document.getElementById('myCanvas'));


//   // const renderer = new THREE.WebGLRenderer({ antialias: true }); //メッシュの輪郭を滑らかに表示
//   const renderer = new THREE.WebGLRenderer({
//     canvas: document.getElementById("myCanvas")
//   })
// renderer.setSize(width, height); //幅と高さを設定
// renderer.setClearColor(0xe6e6fa); // 空間の背景色
// renderer.setPixelRatio(window.devicePixelRatio); //高解像度対応
// // document.getElementById('myCanvas').appendChild(renderer.domElement); //div要素にcanvasを追加
// // const controls = new THREE.OrbitControls(camera);
// function render() {
//     requestAnimationFrame(render); //再度render関数を実行
//     renderer.render(scene, camera); //シーン, カメラをもとに描画
//     snowman.rotation.y += 0.01; //反時計周りにsnowmanを回転
// }
// render();
// }