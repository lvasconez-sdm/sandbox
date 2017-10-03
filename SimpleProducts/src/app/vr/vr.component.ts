import { AfterViewInit, Component, ElementRef, Input, ViewChild } from '@angular/core';
import * as THREE from 'three';
import * as TrackballControls from 'three-trackballcontrols';
import * as STLLoader from 'three-stl-loader';
import 'three-orthographic-trackball-controls';

declare const THREE: any

@Component({
  selector: 'vr',
  templateUrl: './vr.component.html',
  styleUrls: ['./vr.component.scss']
})
export class VrComponent implements AfterViewInit {
  @ViewChild('canvas')
  private canvasRef: ElementRef;
  private cube: THREE.Mesh;
  private renderer: THREE.WebGLRenderer;
  private scene: THREE.Scene;
  private camera: any;
  private controls: TrackballControls;
  private stlLoader: STLLoader;
  
  public size: number = 5;
  public cameraZ: number = -5;
  public fieldOfView: number = 45;
  public nearClippingPane: number = -10; // NOTE: 0 is invalid for a PerspectiveCamera
  public farClippingPane: number = 10;

  constructor() { }

  ngAfterViewInit() {
    this.createScene();
    this.createCube();
    this.render();
    }

    public onResize() {
      this.camera.aspect = this.getAspectRatio();
      this.camera.updateProjectionMatrix();
  
      this.renderer.setSize(this.canvas.clientWidth, this.canvas.clientHeight);
    }

  private get canvas() : HTMLCanvasElement {
    return this.canvasRef.nativeElement;
  }

  private createScene() {
    var stlLoader = new STLLoader(THREE);
    this.stlLoader = new stlLoader();

    this.scene = new THREE.Scene();

    this.scene.background = new THREE.Color( 0x4776BC );

    var plane = new THREE.Mesh(
      new THREE.PlaneBufferGeometry( 10, 10 ),
      new THREE.MeshPhongMaterial( { color: 0x999999, specular: 0x101010 } )
    );
    plane.rotation.x = -Math.PI/2;
    plane.position.y = -1;
    //plane.receiveShadow = true;
    //this.scene.add( plane );

    let aspectRatio = this.getAspectRatio();
    //this.camera = new THREE.PerspectiveCamera(this.fieldOfView, aspectRatio, this.nearClippingPane, this.farClippingPane);
    //this.camera.position.z = this.cameraZ;
    
    var d = 2;    
    this.camera = new THREE.OrthographicCamera( - d * aspectRatio, d * aspectRatio, d, -d, this.nearClippingPane, this.farClippingPane);
    this.camera.position.z = d;
    
    var light = new THREE.DirectionalLight( 0xaaaaaa );
    light.position.set( 10, 10, 10 );
    this.scene.add( light );

    var light = new THREE.DirectionalLight( 0xaaaaaa );
    light.position.set( -10, -10, -10 );
    this.scene.add( light );

    var light = new THREE.AmbientLight( 0x333333 );
    this.scene.add( light );

    //this.addShadowedLight( 5, 5, -10, 0xffaa00, 1 );

    this.renderer = new THREE.WebGLRenderer({ canvas: this.canvas });
    this.renderer.setPixelRatio(devicePixelRatio);
    this.renderer.setSize(this.canvas.clientWidth, this.canvas.clientHeight);    
    
    //this.renderer.gammaInput = true;
    //this.renderer.gammaOutput = true;
    //this.renderer.shadowMap.enabled = true;
    //this.renderer.shadowMap.renderReverseSided = false;    

    // regular trackball for prespective view
    //this.controls = new TrackballControls(this.camera, this.renderer.domElement);

    this.controls = new THREE.OrthographicTrackballControls(this.camera, this.renderer.domElement);
  }  

  public addShadowedLight( x, y, z, color, intensity ) {
    var directionalLight = new THREE.DirectionalLight( color, intensity );
    directionalLight.position.set( x, y, z );
    this.scene.add( directionalLight );
    directionalLight.castShadow = true;
    var d = 1;
    directionalLight.shadow.camera.left = -d;
    directionalLight.shadow.camera.right = d;
    directionalLight.shadow.camera.top = d;
    directionalLight.shadow.camera.bottom = -d;
    directionalLight.shadow.camera.near = 1;
    directionalLight.shadow.camera.far = 4;
    directionalLight.shadow.mapSize.width = 1024;
    directionalLight.shadow.mapSize.height = 1024;
    directionalLight.shadow.bias = -0.005;
  }

  private createCube() {
    var self = this;
    this.stlLoader.load('/assets/CAP.STL', function (geometry) {
      //geometry.computeVertexNormals();
      geometry.center();
      geometry.computeBoundingSphere();
      var factor = 1 / geometry.boundingSphere.radius;
      geometry.scale(factor, factor, factor);
      var material = new THREE.MeshPhongMaterial( { color: 0xffffff, flatShading: true } );
      var mesh = new THREE.Mesh(geometry, material);

      //mesh.castShadow = true;
      //mesh.receiveShadow = true;

      self.scene.add(mesh)

      var height;
      var radius = geometry.boundingSphere.radius;
      if (self.getAspectRatio() > 1.0) {
          height = 2 * radius;
      } else {
        height = 2 * radius / self.getAspectRatio();
      }

      self.camera.left = height * self.getAspectRatio() / - 2;
      self.camera.right = height * self.getAspectRatio() / 2;
      self.camera.top = height / 2;
      self.camera.bottom = height / - 2;
      self.camera.updateProjectionMatrix();

      self.controls.handleResize();
    });
  }  
  
  private getAspectRatio() {
    return this.canvas.clientWidth / this.canvas.clientHeight;
  }  

  private render() {
    let component: VrComponent = this;
    (function render() {
      requestAnimationFrame(render);
      component.controls.update();
      component.renderer.render(component.scene, component.camera);
    }());    
  }
}
