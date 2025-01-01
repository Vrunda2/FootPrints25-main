import React, { useEffect } from "react";
import * as THREE from "three";
import "./RollingSquare.css"
import Sponsors from "../Common/SponsorSlide/Sponsors";
import Footer from "../Common/Footer/Footer";

export default function RollingSquare() {


  useEffect(() => {

    document.title = "Rolling Sqares | FootPrints'23"

  }, [])

  useEffect(() => {
    const canvasEl = document.getElementById("webgl-canvas");
    const canvasSize = {
      w: window.innerWidth,
      h: window.innerHeight,
    };

    const renderer = new THREE.WebGLRenderer({ canvas: canvasEl });
    renderer.setPixelRatio(window.devicePixelRatio);
    renderer.setSize(canvasSize.w, canvasSize.h);

    // ウィンドウとwebGLの座標を一致させるため、描画がウィンドウぴったりになるようカメラを調整
    const fov = 60; // 視野角
    const fovRad = (fov / 2) * (Math.PI / 180);
    const dist = canvasSize.h / 2 / Math.tan(fovRad);
    const camera = new THREE.PerspectiveCamera(
      fov,
      canvasSize.w / canvasSize.h,
      0.1,
      2000
    );
    camera.position.z = dist;

    const scene = new THREE.Scene();

    const loader = new THREE.TextureLoader();

    // 画像をテクスチャにしたplaneを扱うクラス
    class ImagePlane {
      constructor(mesh, img) {
        this.refImage = img;
        this.mesh = mesh;
      }

      setParams() {
        // 参照するimg要素から大きさ、位置を取得してセット
        const rect = this.refImage.getBoundingClientRect();

        this.mesh.scale.x = rect.width;
        this.mesh.scale.y = rect.height;

        const x = rect.left - canvasSize.w / 2 + rect.width / 2;
        const y = -rect.top + canvasSize.h / 2 - rect.height / 2;
        this.mesh.position.set(x, y, this.mesh.position.z);
      }

      update(offset) {
        this.setParams();

        this.mesh.material.uniforms.uTime.value = offset;
      }
    }

    // Planeメッシュを作る関数
    const createMesh = (img) => {
      const texture = loader.load(img.src);

      const uniforms = {
        uTexture: { value: texture },
        uImageAspect: { value: img.naturalWidth / img.naturalHeight },
        uPlaneAspect: { value: img.clientWidth / img.clientHeight },
        uTime: { value: 0 },
      };
      const geo = new THREE.PlaneGeometry(1, 1, 100, 100); // 後から画像のサイズにscaleするので1にしておく
      const mat = new THREE.ShaderMaterial({
        uniforms,
        vertexShader: document.getElementById("v-shader").textContent,
        fragmentShader: document.getElementById("f-shader").textContent,
      });

      const mesh = new THREE.Mesh(geo, mat);

      return mesh;
    };

    // スクロール追従
    let targetScrollY = 0; // スクロール位置
    let currentScrollY = 0; // 線形補間を適用した現在のスクロール位置
    let scrollOffset = 0; // 上記2つの差分

    // 開始と終了をなめらかに補間する関数
    const lerp = (start, end, multiplier) => {
      return (1 - multiplier) * start + multiplier * end;
    };

    const updateScroll = () => {
      // スクロール位置を取得
      targetScrollY = document.documentElement.scrollTop;
      // リープ関数でスクロール位置をなめらかに追従
      currentScrollY = lerp(currentScrollY, targetScrollY, 0.1);

      scrollOffset = targetScrollY - currentScrollY;
    };

    const imagePlaneArray = [];

    // 毎フレーム呼び出す
    const loop = () => {
      updateScroll();
      for (const plane of imagePlaneArray) {
        plane.update(scrollOffset);
      }
      renderer.render(scene, camera);

      requestAnimationFrame(loop);
    };

    // リサイズ処理
    let timeoutId = 0;
    const resize = () => {
      // three.jsのリサイズ
      const width = window.innerWidth;
      const height = window.innerHeight;

      canvasSize.w = width;
      canvasSize.h = height;

      renderer.setPixelRatio(window.devicePixelRatio);
      renderer.setSize(width, height);

      camera.aspect = width / height;
      camera.updateProjectionMatrix();

      // カメラの距離を計算し直す
      const fov = 60;
      const fovRad = (fov / 2) * (Math.PI / 180);
      const dist = canvasSize.h / 2 / Math.tan(fovRad);
      camera.position.z = dist;
      // console.log(canvasSize.w,canvasSize.h)
    };

    const main = () => {
      window.addEventListener("load", () => {
        const imageArray = [...document.querySelectorAll(".img-rs")];
        for (const img of imageArray) {
          const mesh = createMesh(img);
          scene.add(mesh);

          const imagePlane = new ImagePlane(mesh, img);
          imagePlane.setParams();

          imagePlaneArray.push(imagePlane);
        }
        loop();
      });

      window.addEventListener("resize", () => {
        if (timeoutId) clearTimeout(timeoutId);

        timeoutId = setTimeout(resize, 200);
      });
    };

    main();
  }, []);

  return (
    <section style={{ overflow: "auto" }}>

      <div className="header_img">
        <img
          src={
            window.innerWidth > 800
              ? "https://res.cloudinary.com/dm4earvp9/image/upload/v1674646548/Rolling_Squares-_oqluv0.gif"
              : "https://res.cloudinary.com/dm4earvp9/image/upload/v1674646547/Rolling_Squares__1_dqntca.gif"
          }
          alt=""
          id="rs-header"
        />
      </div>

      <div id="Rs_images" className="container mt-5">
        <ul className="image-list">
          <li className="image-item my-3">
            <a href="" className="image-wrapper">
              <div class="glitch" >
                <img 
                  src="https://kpvwxgeuyawddbcmaqxo.supabase.co/storage/v1/object/public/footprint/Jasleen_Royal_1_fw3soe.jpg"
                  alt="Jasleen Royal"
                  className="img-rs"
                />
                <div class="glitch__layers">

                  <div class="glitch__layer" style={{backgroundImage: `url(https://kpvwxgeuyawddbcmaqxo.supabase.co/storage/v1/object/public/footprint/Jasleen_Royal_1_fw3soe.jpg)`}}></div>
                  <div class="glitch__layer" style={{backgroundImage: `url(https://kpvwxgeuyawddbcmaqxo.supabase.co/storage/v1/object/public/footprint/Jasleen_Royal_1_fw3soe.jpg)`}}></div>
                  <div class="glitch__layer" style={{backgroundImage: `url(https://kpvwxgeuyawddbcmaqxo.supabase.co/storage/v1/object/public/footprint/Jasleen_Royal_1_fw3soe.jpg)`}}></div>
                </div>
              </div>

            </a>
          </li>
          <li className="image-item my-3">
            <a href="" className="image-wrapper">
              <div class="glitch" >
                <img
                  src="https://kpvwxgeuyawddbcmaqxo.supabase.co/storage/v1/object/public/footprint/Zeph_c7sqpd.jpg"
                  alt="Zephyrtone"
                  className="img-rs"
                />
                <div class="glitch__layers">

                  <div class="glitch__layer" style={{backgroundImage: `url(https://kpvwxgeuyawddbcmaqxo.supabase.co/storage/v1/object/public/footprint/Zeph_c7sqpd.jpg)`}}></div>
                  <div class="glitch__layer" style={{backgroundImage: `url(https://kpvwxgeuyawddbcmaqxo.supabase.co/storage/v1/object/public/footprint/Zeph_c7sqpd.jpg)`}}></div>
                  <div class="glitch__layer" style={{backgroundImage: `url(https://kpvwxgeuyawddbcmaqxo.supabase.co/storage/v1/object/public/footprint/Zeph_c7sqpd.jpg)`}}></div>
                
                </div>
              </div>

            </a>
          </li>
          <li className="image-item my-3">
            <a href="" className="image-wrapper">
              <div class="glitch" >
                <img
                  src="https://kpvwxgeuyawddbcmaqxo.supabase.co/storage/v1/object/public/footprint/rs_ekmjth.jpg"
                  alt="Gajendra Verma"
                  className="img-rs"
                />
                <div class="glitch__layers">

                
                  <div class="glitch__layer" style={{backgroundImage: `url(https://kpvwxgeuyawddbcmaqxo.supabase.co/storage/v1/object/public/footprint/rs_ekmjth.jpg)`}}></div>
                  <div class="glitch__layer" style={{backgroundImage: `url(https://kpvwxgeuyawddbcmaqxo.supabase.co/storage/v1/object/public/footprint/rs_ekmjth.jpg)`}}></div>
                  <div class="glitch__layer" style={{backgroundImage: `url(https://kpvwxgeuyawddbcmaqxo.supabase.co/storage/v1/object/public/footprint/rs_ekmjth.jpg)`}}></div>
                </div>
              </div>

            </a>
          </li>
          <li className="image-item my-3">
            <a href="" className="image-wrapper">
              <div class="glitch" >
                <img
                  src="https://kpvwxgeuyawddbcmaqxo.supabase.co/storage/v1/object/public/footprint/md_1_lvz9o4.png"
                  alt=""
                  className="img-rs"
                />
                <div class="glitch__layers">

                
                  <div class="glitch__layer" style={{backgroundImage: `url(https://kpvwxgeuyawddbcmaqxo.supabase.co/storage/v1/object/public/footprint/md_1_lvz9o4.png)`}}></div>
                  <div class="glitch__layer" style={{backgroundImage: `url(https://kpvwxgeuyawddbcmaqxo.supabase.co/storage/v1/object/public/footprint/md_1_lvz9o4.png)`}}></div>
                  <div class="glitch__layer" style={{backgroundImage: `url(https://kpvwxgeuyawddbcmaqxo.supabase.co/storage/v1/object/public/footprint/md_1_lvz9o4.png)`}}></div>
                </div>
              </div>

            </a>
          </li>
          <li className="image-item my-3">
            <a href="" className="image-wrapper">
              <div class="glitch" >
                <img
                  src="https://kpvwxgeuyawddbcmaqxo.supabase.co/storage/v1/object/public/footprint/shalmali_1_jpmzcs.jpg"
                  alt=""
                  className="img-rs"
                />
                <div class="glitch__layers">

                
                  <div class="glitch__layer" style={{backgroundImage: `url(https://kpvwxgeuyawddbcmaqxo.supabase.co/storage/v1/object/public/footprint/shalmali_1_jpmzcs.jpg)`}}></div>
                  <div class="glitch__layer" style={{backgroundImage: `url(https://kpvwxgeuyawddbcmaqxo.supabase.co/storage/v1/object/public/footprint/shalmali_1_jpmzcs.jpg)`}}></div>
                  <div class="glitch__layer" style={{backgroundImage: `url(https://kpvwxgeuyawddbcmaqxo.supabase.co/storage/v1/object/public/footprint/shalmali_1_jpmzcs.jpg)`}}></div>
                </div>
              </div>

            </a>
          </li>
          <li className="image-item my-3">
            <a href="" className="image-wrapper">
              <div class="glitch" >
                <img
                  src="https://kpvwxgeuyawddbcmaqxo.supabase.co/storage/v1/object/public/footprint/amaal_bv4tr8.jpg"
                  alt=""
                  className="img-rs"
                />
                <div class="glitch__layers">

                
                  <div class="glitch__layer" style={{backgroundImage: `url(https://kpvwxgeuyawddbcmaqxo.supabase.co/storage/v1/object/public/footprint/amaal_bv4tr8.jpg)`}}></div>
                  <div class="glitch__layer" style={{backgroundImage: `url(https://kpvwxgeuyawddbcmaqxo.supabase.co/storage/v1/object/public/footprint/amaal_bv4tr8.jpg)`}}></div>
                  <div class="glitch__layer" style={{backgroundImage: `url(https://kpvwxgeuyawddbcmaqxo.supabase.co/storage/v1/object/public/footprint/amaal_bv4tr8.jpg)`}}></div>
                </div>
              </div>

            </a>
          </li>
          <li className="image-item my-3">
            <a href="" className="image-wrapper">
              <div class="glitch" >
                <img
                  src="https://kpvwxgeuyawddbcmaqxo.supabase.co/storage/v1/object/public/footprint/ash-king_il3i5u.jpg"
                  alt=""
                  className="img-rs"
                />
                <div class="glitch__layers">

                
                  <div class="glitch__layer" style={{backgroundImage: `url(https://kpvwxgeuyawddbcmaqxo.supabase.co/storage/v1/object/public/footprint/ash-king_il3i5u.jpg)`}}></div>
                  <div class="glitch__layer" style={{backgroundImage: `url(https://kpvwxgeuyawddbcmaqxo.supabase.co/storage/v1/object/public/footprint/ash-king_il3i5u.jpg)`}}></div>
                  <div class="glitch__layer" style={{backgroundImage: `url(https://kpvwxgeuyawddbcmaqxo.supabase.co/storage/v1/object/public/footprint/ash-king_il3i5u.jpg)`}}></div>
                </div>
              </div>

            </a>
          </li>
          <li className="image-item my-3">
            <a href="" className="image-wrapper">
              <div class="glitch" >
                <img
                  src="https://kpvwxgeuyawddbcmaqxo.supabase.co/storage/v1/object/public/footprint/sachin-jigar_zjccf0.jpg"
                  alt=""
                  className="img-rs"
                />
                <div class="glitch__layers">

                
                  <div class="glitch__layer" style={{backgroundImage: `url(https://kpvwxgeuyawddbcmaqxo.supabase.co/storage/v1/object/public/footprint/sachin-jigar_zjccf0.jpg)`}}></div>
                  <div class="glitch__layer" style={{backgroundImage: `url(https://kpvwxgeuyawddbcmaqxo.supabase.co/storage/v1/object/public/footprint/sachin-jigar_zjccf0.jpg)`}}></div>
                  <div class="glitch__layer" style={{backgroundImage: `url(https://kpvwxgeuyawddbcmaqxo.supabase.co/storage/v1/object/public/footprint/sachin-jigar_zjccf0.jpg)`}}></div>
                </div>
              </div>

            </a>
          </li>
          <li className="image-item my-3">
            <a href="" className="image-wrapper">
              <div class="glitch" >
                <img
                  src="https://kpvwxgeuyawddbcmaqxo.supabase.co/storage/v1/object/public/footprint/mohit-chauhan_aicgid.jpg"
                  alt=""
                  className="img-rs"
                />
                <div class="glitch__layers">

                
                  <div class="glitch__layer" style={{backgroundImage: `url(https://kpvwxgeuyawddbcmaqxo.supabase.co/storage/v1/object/public/footprint/mohit-chauhan_aicgid.jpg)`}}></div>
                  <div class="glitch__layer" style={{backgroundImage: `url(https://kpvwxgeuyawddbcmaqxo.supabase.co/storage/v1/object/public/footprint/mohit-chauhan_aicgid.jpg)`}}></div>
                  <div class="glitch__layer" style={{backgroundImage: `url(https://kpvwxgeuyawddbcmaqxo.supabase.co/storage/v1/object/public/footprint/mohit-chauhan_aicgid.jpg)`}}></div>
                </div>
              </div>

            </a>
          </li>
          <li className="image-item my-3">
            <a href="" className="image-wrapper">
              <div class="glitch" >
                <img
                  src="https://kpvwxgeuyawddbcmaqxo.supabase.co/storage/v1/object/public/footprint/anushka-manchanda_qfto0h.jpg"
                  alt=""
                  className="img-rs"
                />
                <div class="glitch__layers">

                
                  <div class="glitch__layer" style={{backgroundImage: `url(https://kpvwxgeuyawddbcmaqxo.supabase.co/storage/v1/object/public/footprint/anushka-manchanda_qfto0h.jpg)`}}></div>
                  <div class="glitch__layer" style={{backgroundImage: `url(https://kpvwxgeuyawddbcmaqxo.supabase.co/storage/v1/object/public/footprint/anushka-manchanda_qfto0h.jpg)`}}></div>
                  <div class="glitch__layer" style={{backgroundImage: `url(https://kpvwxgeuyawddbcmaqxo.supabase.co/storage/v1/object/public/footprint/anushka-manchanda_qfto0h.jpg)`}}></div>
                </div>
              </div>

            </a>
          </li>
          <li className="image-item my-3">
            <a href="" className="image-wrapper">
              <div class="glitch" >
                <img
                  src="https://kpvwxgeuyawddbcmaqxo.supabase.co/storage/v1/object/public/footprint/shilpa-rao_gvn3bi.jpg"
                  alt=""
                  className="img-rs"
                />
                <div class="glitch__layers">

                
                  <div class="glitch__layer" style={{backgroundImage: `url(https://kpvwxgeuyawddbcmaqxo.supabase.co/storage/v1/object/public/footprint/shilpa-rao_gvn3bi.jpg)`}}></div>
                  <div class="glitch__layer" style={{backgroundImage: `url(https://kpvwxgeuyawddbcmaqxo.supabase.co/storage/v1/object/public/footprint/shilpa-rao_gvn3bi.jpg)`}}></div>
                  <div class="glitch__layer" style={{backgroundImage: `url(https://kpvwxgeuyawddbcmaqxo.supabase.co/storage/v1/object/public/footprint/shilpa-rao_gvn3bi.jpg)`}}></div>
                </div>
              </div>

            </a>
          </li>
          <li className="image-item my-3">
            <a href="" className="image-wrapper">
              <div class="glitch" >
                <img
                  src="https://kpvwxgeuyawddbcmaqxo.supabase.co/storage/v1/object/public/footprint/RC-racing_ykhcuz.jpg"
                  alt=""
                  className="img-rs"
                />
                <div class="glitch__layers">

                
                  <div class="glitch__layer" style={{backgroundImage: `url(https://kpvwxgeuyawddbcmaqxo.supabase.co/storage/v1/object/public/footprint/RC-racing_ykhcuz.jpg)`}}></div>
                  <div class="glitch__layer" style={{backgroundImage: `url(https://kpvwxgeuyawddbcmaqxo.supabase.co/storage/v1/object/public/footprint/RC-racing_ykhcuz.jpg)`}}></div>
                  <div class="glitch__layer" style={{backgroundImage: `url(https://kpvwxgeuyawddbcmaqxo.supabase.co/storage/v1/object/public/footprint/RC-racing_ykhcuz.jpg)`}}></div>
                </div>
              </div>

            </a>
          </li>
          <li className="image-item my-3">
            <a href="" className="image-wrapper">
              <div class="glitch" >
                <img
                  src="https://kpvwxgeuyawddbcmaqxo.supabase.co/storage/v1/object/public/footprint/evil-ryderz_shmch9.jpg"
                  alt=""
                  className="img-rs"
                />
                <div class="glitch__layers">

                
                  <div class="glitch__layer" style={{backgroundImage: `url(https://kpvwxgeuyawddbcmaqxo.supabase.co/storage/v1/object/public/footprint/evil-ryderz_shmch9.jpg)`}}></div>
                  <div class="glitch__layer" style={{backgroundImage: `url(https://kpvwxgeuyawddbcmaqxo.supabase.co/storage/v1/object/public/footprint/evil-ryderz_shmch9.jpg)`}}></div>
                  <div class="glitch__layer" style={{backgroundImage: `url(https://kpvwxgeuyawddbcmaqxo.supabase.co/storage/v1/object/public/footprint/evil-ryderz_shmch9.jpg)`}}></div>
                </div>
              </div>

            </a>
          </li>
          <li className="image-item my-3">
            <a href="" className="image-wrapper">
              <div class="glitch" >
                <img
                  src="https://kpvwxgeuyawddbcmaqxo.supabase.co/storage/v1/object/public/footprint/team-raptor_z5aafe.jpg"
                  alt=""
                  className="img-rs"
                />
                <div class="glitch__layers">

                
                  <div class="glitch__layer" style={{backgroundImage: `url(https://kpvwxgeuyawddbcmaqxo.supabase.co/storage/v1/object/public/footprint/team-raptor_z5aafe.jpg)`}}></div>
                  <div class="glitch__layer" style={{backgroundImage: `url(https://kpvwxgeuyawddbcmaqxo.supabase.co/storage/v1/object/public/footprint/team-raptor_z5aafe.jpg)`}}></div>
                  <div class="glitch__layer" style={{backgroundImage: `url(https://kpvwxgeuyawddbcmaqxo.supabase.co/storage/v1/object/public/footprint/team-raptor_z5aafe.jpg)`}}></div>
                </div>
              </div>

            </a>
          </li>
          <li className="image-item my-3">
            <a href="" className="image-wrapper">
              <div class="glitch" >
                <img
                  src="https://kpvwxgeuyawddbcmaqxo.supabase.co/storage/v1/object/public/footprint/KTM_eok3iv.jpg"
                  alt=""
                  className="img-rs"
                />
                <div class="glitch__layers">

                
                  <div class="glitch__layer" style={{backgroundImage: `url(https://kpvwxgeuyawddbcmaqxo.supabase.co/storage/v1/object/public/footprint/KTM_eok3iv.jpg)`}}></div>
                  <div class="glitch__layer" style={{backgroundImage: `url(https://kpvwxgeuyawddbcmaqxo.supabase.co/storage/v1/object/public/footprint/KTM_eok3iv.jpg)`}}></div>
                  <div class="glitch__layer" style={{backgroundImage: `url(https://kpvwxgeuyawddbcmaqxo.supabase.co/storage/v1/object/public/footprint/KTM_eok3iv.jpg)`}}></div>
                </div>
              </div>

            </a>
          </li>
          <li className="image-item my-3">
            <a href="" className="image-wrapper">
              <div class="glitch" >
                <img
                  src="https://kpvwxgeuyawddbcmaqxo.supabase.co/storage/v1/object/public/footprint/skateboarding_aellju.jpg"
                  alt=""
                  className="img-rs"
                />
                <div class="glitch__layers">

                
                  <div class="glitch__layer" style={{backgroundImage: `url(https://kpvwxgeuyawddbcmaqxo.supabase.co/storage/v1/object/public/footprint/skateboarding_aellju.jpg)`}}></div>
                  <div class="glitch__layer" style={{backgroundImage: `url(https://kpvwxgeuyawddbcmaqxo.supabase.co/storage/v1/object/public/footprint/skateboarding_aellju.jpg)`}}></div>
                  <div class="glitch__layer" style={{backgroundImage: `url(https://kpvwxgeuyawddbcmaqxo.supabase.co/storage/v1/object/public/footprint/skateboarding_aellju.jpg)`}}></div>
                </div>
              </div>

            </a>
          </li>
        </ul>
      </div>
      <div className="webgl-canvas">
        <canvas id="webgl-canvas" className="webgl-canvas__body"></canvas>
      </div>

      <Sponsors />
      <Footer />
    </section>
  );
}
