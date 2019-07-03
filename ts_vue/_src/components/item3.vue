<template>
  <div class="container">
    <input id="document" multiple type="file" @change="handleFileSelect" />
    <div class="row">
      <div class="span8">
        <div id="output" class="well">
        </div>
      </div>
      <div class="span4">
        <div class="filesName"></div>
        <h3>Messages</h3>
        <div id="messages"></div>
        <div class="img"></div>
        <textarea name="imgValue" id="img-cont" cols="30" rows="10"></textarea>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
  import Vue from 'vue'
  import Component from 'vue-class-component'
  import mammoth from 'mammoth'
//

  interface Buffer {
    (arrayBuffer: any): void
  }

  interface Msg {
    [key: string]: any,
    messages?
      : Array<A>
  }

  interface A {
    [index: number]: Msg
  }

  @Component({})
  export default class Item3 extends Vue {
    public handleFileSelect (event: HTMLInputElement): void {
      this.readFileInputEventAsArrayBuffer(<HTMLInputElement>event,  (arrayBuffer: any): void => {
        mammoth.convertToHtml({arrayBuffer})
          .then(this.displayResult)
          .done()
      })
    }

    displayResult (result: Msg) {
      ((document as HTMLDocument).getElementById("output") as HTMLElement).innerHTML = result.value;
      console.log(result)
      let messageHtml: string = (result.messages as Array<A>).map((message: Msg) => {
        return `<li class="${message.type}">${this.escapeHtml(message.message)}</li>`
      }).join("")

      let dom = ((document as HTMLDocument).getElementById("messages") as HTMLElement)

      dom.innerHTML = `<ul>${messageHtml}</ul>`
    }
//
    readFileInputEventAsArrayBuffer (event: any, callback: Buffer) {
      let file = event.target.files
      let index: number = 0
      if (file.length) {
        while (file[index]) {
          let targetFile = file[index]
          let reader: FileReader = new FileReader()
          let imgName = (document as HTMLDocument).getElementsByClassName('filesName')[0]

          // 创建图片标题dom节点
          let sp = (document as HTMLDocument).createElement('span')
          sp.className = 'imgName'
          sp.innerText = targetFile.name

          imgName.appendChild(sp)

          reader.onload = (e: any) => {
            let arrayBuffer: any= e.target.result
            if (/^image\/\w+$/.test(targetFile.type)) {
              console.log(arrayBuffer, 1111)
              let dom = (document as HTMLDocument).getElementsByClassName('img')[0]
              let ct = ((document as HTMLDocument).getElementById('img-cont') as HTMLInputElement)
              let img = (document as HTMLDocument).createElement('img')
              img.src = arrayBuffer
              img.className = 'imgBg'
              img.title = targetFile.name
              dom.appendChild(img)
              ct.value += arrayBuffer + '\r\r'
            } else {
              callback(arrayBuffer)
            }
          }

          if (/^image\/\w+$/.test(targetFile.type)) {
            reader.readAsDataURL(targetFile)
          } else {
            reader.readAsArrayBuffer(targetFile)
          }

          index++
        }
      }
    }

    escapeHtml (value: string): string {
      return value
        .replace(/&/g, '&amp;')
        .replace(/"/g, '&quot;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;');
    }

    mounted () {
//      console.log(mammoth, 222)
    }
  }
</script>