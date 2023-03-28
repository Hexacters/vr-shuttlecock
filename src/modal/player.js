
import React, { useEffect, useState } from 'react'
import { useAnimations, useGLTF } from '@react-three/drei'
import { useFrame } from '@react-three/fiber'

export default function Model(props) {
  const { nodes, materials, animations } = useGLTF('/player.glb')

  const { ref, actions, names } = useAnimations(animations)
  const [index, setIndex] = useState(4)

  useEffect(() => {
    console.log(nodes);
    // Reset and fade in animation after an index has been changed
    // actions[names]
    console.log(actions, names)
  }, [index, actions, names])

  useFrame((state, delta) => {
    // console.log(state, delta)
  })


  return (
    <group {...props} ref={ref} dispose={null}>
      <group rotation={[-Math.PI / 2, 0, 0]} scale={1.06}>
        <group position={[-0.29, -0.26, 1.08]} rotation={[0.24, 0.28, -0.88]} scale={0.09}>
          <mesh geometry={nodes['qiupai_03_-_Default_0'].geometry} material={materials['03_-_Default']} />
          <mesh geometry={nodes['qiupai_02_-_Default_0'].geometry} material={materials['02_-_Default']} />
          <mesh geometry={nodes['qiupai_08_-_Default_0'].geometry} material={materials['08_-_Default']} />
          <mesh geometry={nodes['qiupai_08_-_Default_0_1'].geometry} material={materials['08_-_Default']} />
          <mesh geometry={nodes['qiupai_08_-_Default_0_2'].geometry} material={materials['08_-_Default']} />
        </group>
        <group position={[0, -0.07, 0]}>
          <mesh geometry={nodes['Model_Material_#54_0'].geometry} material={materials.Material_54} />
          <mesh geometry={nodes['Model_Material_#54_0_1'].geometry} material={materials.Material_54} />
        </group>
        <group position={[-0.02, -0.73, 0.91]} rotation={[-2.64, -0.52, -2.25]} scale={0.01}>
          <mesh geometry={nodes.qiu__lambert5_0.geometry} material={materials.lambert5} />
          <mesh geometry={nodes['qiu_02_-_Default_0'].geometry} material={materials['02_-_Default_0']} />
        </group>
      </group>
    </group>
  )
}

useGLTF.preload('/player.glb')